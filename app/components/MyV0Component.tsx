/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oGGQSoSRNIQ
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="w-full max-w-lg mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-center">Guestbook</h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-center">We would love to hear from you!</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="guest-name">Name</Label>
          <Input id="guest-name" placeholder="Enter your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="guest-message">Message</Label>
          <Textarea className="min-h-[100px]" id="guest-message" placeholder="Enter your message" required />
        </div>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </div>
    </div>
  )
}

