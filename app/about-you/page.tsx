/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function AboutYouPage() {
  const today = new Date().toLocaleDateString();
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>About you</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="name">Your name</label>
            <Input id="name" placeholder="e.g. Dave Pearce" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="role">Your role</label>
            <Input id="role" placeholder="e.g. Founder, host, local partner" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="story">Your story</label>
            <Textarea id="story" rows={4} placeholder="Share a short intro about you and Around You..." />
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" type="button">Cancel</Button>
            <Button type="submit">Save</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
