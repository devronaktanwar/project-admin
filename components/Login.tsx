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
import { toast } from "sonner";
import { useRouter } from "next/navigation";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({ emailAddress: "", password: "" });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // try {
    //   setLoading(true);
    //   // const response = await apiClient.post("/employer/login", formData);
    //   if (response.data.isSuccess) {
    //     toast.success("Signed in successfully", {
    //       position: "top-right",
    //       description: "Redirecting to home page...",
    //     });
    //     setTimeout(() => {
    //       router.push("/");
    //     }, 4000);
    //   } else {
    //     toast.error("Opps! something went wrong", {
    //       position: "top-right",
    //       description: "Invalid credentials",
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
          Welcome back
        </CardTitle>
        <CardDescription className="text-center">
          Enter your credentials to sign in to your account
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
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
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
            <p className="text-gray-600">Don't have an account?</p>
            <Link
              href={"/register"}
              className="hover:underline font-medium"
            >
              Sign Up
            </Link>
          </div>
          <div className="flex justify-end">
            <p className="font-medium text-sm cursor-pointer hover:underline">
              Forget Password ?
            </p>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Login;
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
];
