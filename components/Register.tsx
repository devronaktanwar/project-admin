"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";

const Register = () => {
  // const [loading, setLoading] = useState(false);
  // const router = useRouter();
  const [formData, setFormData] = useState({ emailAddress: "", password: "" });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // try {
    //   setLoading(true);
    //   const response = await apiClient.post("/employer/signup", formData);
    //   if (response.data.isSuccess) {
    //     toast.success("Signed up successfully", {
    //       position: "top-right",
    //       description: "Redirecting to home page...",
    //     });
    //     setTimeout(() => {
    //       router.push("/");
    //     }, 4000);
    //   } else {
    //     toast.error("Opps! something went wrong", {
    //       position: "top-right",
    //       description: "It's not you, it's us",
    //     });
    //   }
    // } catch (err) {
    //   console.log("Error:", err);
    // } finally {
    //   setLoading(false);
    // }
  };
  return (
    <Card className="border-0 shadow-none md:shadow-sm md:border md:max-w-md w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Create an account
        </CardTitle>
        <CardDescription className="text-center">
          Enter your information to get started
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <CardContent className="flex flex-col gap-2">
          {inputFields.map((item, index) => {
            return (
              <div className="flex flex-col gap-1" key={index}>
                <Label className="text-sm">{item.label}</Label>
                <Input
                  type={item.type}
                  className="text-sm font-medium"
                  onChange={(e) =>
                    setFormData({ ...formData, [item.name]: e.target.value })
                  }
                />
              </div>
            );
          })}
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button
            type="submit"
            className="w-full cursor-pointer"
            // disabled={loading}
          >
            {/* {loading ? "Signing up..." : "Sign Up"} */}
            Sign Up
          </Button>
          <p className="text-xs text-gray-600">OR</p>
          <Button
            type="button"
            className="w-full cursor-pointer"
            variant="outline"
          >
            Continue with <FaGoogle />
          </Button>
          <div className="flex items-center text-sm gap-1">
            <p className="text-gray-600">Already have an account?</p>
            <Link href={"/"} className="hover:underline font-medium">
              Sign In
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Register;
const inputFields = [
  {
    label: "Email Address",
    name: "emailAddress",
    type: "email",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
  },
];
