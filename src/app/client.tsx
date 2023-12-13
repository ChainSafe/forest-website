"use client"

// only run if mounted on clientside
import { useEffect, useState } from "react";


export default function ClientLoaded({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <ClientLoaded>
      {mounted && children}
    </ClientLoaded>
  )
}