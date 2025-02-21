"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { CreditCard, AppleIcon, CreditCardIcon, ShoppingCartIcon as PaypalIcon } from "lucide-react"

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle payment submission logic here
    console.log("Payment submitted with method:", paymentMethod)
  }

  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-3xl font-bold text-heading mb-6 text-center">Complete Your Purchase</h2>
        <h2 className="text-3xl font-bold text-heading mb-6 text-center">{}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Payment Method</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setPaymentMethod("card")}
                className={`p-4 border rounded-md flex items-center justify-center ${
                  paymentMethod === "card" ? "border-primary" : "border-gray-300"
                }`}
              >
                <CreditCard className="w-6 h-6 mr-2" />
                Card
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod("apple")}
                className={`p-4 border rounded-md flex items-center justify-center ${
                  paymentMethod === "apple" ? "border-primary" : "border-gray-300"
                }`}
              >
                <AppleIcon className="w-6 h-6 mr-2" />
                Apple Pay
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod("samsung")}
                className={`p-4 border rounded-md flex items-center justify-center ${
                  paymentMethod === "samsung" ? "border-primary" : "border-gray-300"
                }`}
              >
                <CreditCardIcon className="w-6 h-6 mr-2" />
                Samsung Pay
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod("paypal")}
                className={`p-4 border rounded-md flex items-center justify-center ${
                  paymentMethod === "paypal" ? "border-primary" : "border-gray-300"
                }`}
              >
                <PaypalIcon className="w-6 h-6 mr-2" />
                PayPal
              </button>
            </div>
          </div>
          {paymentMethod === "card" && (
            <>
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiry"
                    name="expiry"
                    placeholder="MM/YY"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="number"
                    max="3"
                    id="cvv"
                    name="cvv"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>
            </>
          )}
          <button
            type="submit"
            className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Complete Payment
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          By completing this purchase, you agree to our{" "}
          <a href="/terms" className="text-primary hover:underline">
            Terms of Service
          </a>
        </p>
      </motion.div>
    </div>
  )
}

