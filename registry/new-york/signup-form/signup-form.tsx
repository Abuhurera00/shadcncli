"use client"

import * as React from "react"
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { z } from "zod"

const exampleFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(1),
})

export function SignUpForm() {
  const [pending, setPending] = React.useState(false)
  const [state, setState] = React.useState({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    success: false,
    errors: {
      name: "",
      email: "",
      password: "",
    },
  })

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setPending(true)

      const formData = new FormData(e.target as HTMLFormElement)
      const data = Object.fromEntries(formData.entries())
      const result = exampleFormSchema.safeParse(data)

      if (!result.success) {
        setState({
          ...state,
          errors: Object.fromEntries(
            Object.entries(result.error.flatten().fieldErrors).map(
              ([key, value]) => [key, value?.[0] ?? ""]
            )
          ) as Record<keyof typeof state.errors, string>,
        })
        setPending(false)
        return
      }

      setPending(false)
    },
    [state]
  )

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Welcome back</CardTitle>
        <CardDescription>
          Sign Up with your Apple or Google account
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="grid gap-6">
            <div className="flex flex-col gap-4">
              <Button variant="outline" className="w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                    fill="currentColor"
                  />
                </svg>
                Continue with Apple
              </Button>
              <Button variant="outline" className="w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    fill="currentColor"
                  />
                </svg>
                Continue with Google
              </Button>
            </div>
            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
              <span className="relative z-10 bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>

            <div
              className="group/field grid gap-6"
              data-invalid={!!state.errors?.name}
            >
              <div className="grid gap-2">
                <Label
                  htmlFor="name"
                  className="group-data-[invalid=true]/field:text-destructive"
                >
                  Name <span aria-hidden="true">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Lee Robinson"
                  className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
                  disabled={pending}
                  aria-invalid={!!state.errors?.name}
                  aria-errormessage="error-name"
                  defaultValue={state.defaultValues.name}
                />
                {state.errors?.name && (
                  <p id="error-name" className="text-destructive text-sm">
                    {state.errors.name}
                  </p>
                )}
              </div>
            </div>
            <div
              className="grid gap-6"
            >
              <div className="group/field grid gap-2"
                data-invalid={!!state.errors?.email}
              >
                <Label
                  htmlFor="email"
                  className="group-data-[invalid=true]/field:text-destructive"
                >
                  Email <span aria-hidden="true">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="leerob@acme.com"
                  className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
                  disabled={pending}
                  aria-invalid={!!state.errors?.email}
                  aria-errormessage="error-email"
                  defaultValue={state.defaultValues.email}
                />
                {state.errors?.email && (
                  <p id="error-email" className="text-destructive text-sm">
                    {state.errors.email}
                  </p>
                )}
              </div>
              <div
                className="group/field grid gap-2"
                data-invalid={!!state.errors?.password}
              >
                <div className="flex items-center">
                  <Label
                    htmlFor="password"
                    className="group-data-[invalid=true]/field:text-destructive"
                  >
                    Password <span aria-hidden="true">*</span>
                  </Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  name="password"
                  placeholder="Type your password here..."
                  className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
                  disabled={pending}
                  aria-invalid={!!state.errors?.password}
                  aria-errormessage="error-password"
                  defaultValue={state.defaultValues.password}
                />
                {state.errors?.password && (
                  <p id="error-password" className="text-destructive text-sm">
                    {state.errors.password}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={pending}>
                {pending ? "Signing Up..." : "Sign Up"}
              </Button>
            </div>
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="#" className="underline underline-offset-4">
              Sign up
            </a>
          </div>
          </div>
        </CardContent>
      </form>
    </Card>
  )
}
