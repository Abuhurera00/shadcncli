import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { SignUpForm } from "@/registry/new-york/signup-form/signup-form"
import { ExpandButton } from "@/registry/new-york/expand-button/expand-button"
import { SlideTabs } from "@/registry/new-york/slide-tabs/slide-tabs"

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A Sign Up form with Zod validation.
            </h2>
            <OpenInV0Button name="signup-form" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[500px] relative">
            <SignUpForm />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A Slide Tab Component.
            </h2>
            <OpenInV0Button name="slide-tabs" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[500px] relative">
            <SlideTabs />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A Expand button with hover tooltip.
            </h2>
            <OpenInV0Button name="expand-button" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <ExpandButton />
          </div>
        </div>
      </main>
    </div>
  )
}
