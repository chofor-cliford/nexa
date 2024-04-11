"use client";

import { Button } from "@/components/ui/button";
import { defaultValues, formSchema, genders } from "@/constants";
import Image from "next/image";
import { useForm, FormProvider } from "react-hook-form";
import { format } from "date-fns";
import { Calendar as CalendarIcon, UploadCloudIcon } from "lucide-react";

import { cn, getImageDataURI } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";


const NewAgent = () => {
  const [dataURI, setDataURI] = useState<string | null>(null);
   const [resource, setResource] = useState<
     string | CloudinaryUploadWidgetInfo | undefined
   >();
   console.log(resource)

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageURI = await getImageDataURI(file);
      setDataURI(imageURI);
    }
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...defaultValues,
      properties: defaultValues.properties.toString(),
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-5 flex flex-col gap-2"
      >
        <h1 className="text-[#11142D] font-bold text-[25px] leading-[34.15px]">
          Add New Agent
        </h1>

        <div className="w-[1145px] h-[1020px] rounded-md bg-[#FCFCFC] flex flex-col">
          <div className="w-full h-[287.93px] flex">
            <Image
              src={
                "https://source.unsplash.com/random/1145x300?volcanoes,technology,music,impact-crater,nature" ||
                "/assets/profile_bg1.png"
              }
              alt="Profile Background"
              width={1145}
              height={300}
              className="object-cover"
            />
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="relative w-[137px] h-[137px]">
              <Image
                src="/assets/profile_image.png"
                width={137}
                height={137}
                alt="profile Image"
                className="ring-8 ring-white rounded-full absolute -top-10 left-8"
              />
            </div>
            <div className="flex gap-2 items-center mr-8 -mt-12">
              <Button variant="outline">Cancel</Button>
              <Button
                type="submit"
                className="bg-primary-BLUE hover:bg-blue-800"
              >
                Save
              </Button>
            </div>
          </div>

          <div className="ml-8">
            <div className="w-[854px] h-[522px] gap-5 flex flex-col">
              <h2 className="font-semibold text-[18px] leading-[24.59px] text-[#11142D]">
                My details
              </h2>

              <div className="space-y-8 flex flex-col w-full h-full">
                <div className="flex w-[854px] h-[68px] gap-6 items-center">
                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="firstname">First Name</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            id="firstname"
                            placeholder="Jobanne"
                            {...field}
                            className="w-[412px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="lastname">Last Name</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            id="lastname"
                            placeholder="James"
                            {...field}
                            className="w-[412px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex w-[854px] h-[68px] gap-6 items-center">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="phone">Phone</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            id="phone"
                            placeholder="+123 456 7890"
                            {...field}
                            className="w-[412px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date of birth</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[412px] pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex w-[854px] h-[68px] gap-6 items-center">
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="gender">Gender</FormLabel>
                        <FormControl>
                          <Select>
                            <SelectTrigger className="w-[412px]">
                              <SelectValue placeholder="Male" />
                            </SelectTrigger>
                            <SelectContent>
                              {genders.map((gender: string) => (
                                <SelectItem
                                  key={gender}
                                  id="gender"
                                  value={gender}
                                >
                                  {gender}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            id="email"
                            placeholder="hussain@gmail.com"
                            {...field}
                            className="w-[412px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex w-[854px] h-[68px] gap-6 items-center">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="country">Country</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            id="country"
                            placeholder="Bangladesh"
                            {...field}
                            className="w-[412px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="properties"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="properties">Properties</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            id="properties"
                            {...field}
                            className="w-[412px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div
                  id="picture"
                  className="flex w-[854px] h-[125px] rounded-[10px] cursor-pointer border border-[#E4E4E4] flex-col justify-center items-center gap-[10px]"
                >
                  {dataURI ? (
                    <Image
                      src={dataURI}
                      alt="profile"
                      className="w-[412px] h-[125px]"
                      width={412}
                      height={125}
                    />
                  ) : (
                    <CldUploadWidget
                      options={{ sources: ["local", "url", "unsplash"] }}
                      signatureEndpoint="/api/sign-cloudinary-params"
                      onSuccess={(result, { widget }) => {
                        setResource(result?.info);
                        widget.close();
                      }}
                    >
                      {({ open }) => {
                        function handleOnClick() {
                          setResource(undefined);
                          open();
                        }
                        return (
                          <Button
                            variant="outline"
                            className="flex items-center flex-col"
                            onClick={handleOnClick}
                          >
                            <UploadCloudIcon color="#475BE8" />
                            <span className="font-medium text-[14px] leading-[22px]">
                              Click to upload or drag and drop
                            </span>
                            <span className="font-medium text-[14px] leading-[22px]">
                              SVG, PNG, JPG or GIF (max, 800x400px)
                            </span>
                          </Button>
                        );
                      }}
                    </CldUploadWidget>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default NewAgent;
