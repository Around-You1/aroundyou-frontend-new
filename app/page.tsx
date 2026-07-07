"use client";
export const dynamic = "force-dynamic";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Welcome to Around You</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Please select how you would like to continue.
          </p>

          <div className="flex flex-col gap-4">
            <Button asChild size="lg">
              <a href="/login/guest">Guest Login</a>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a href="/login/partner">Partner Login</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
