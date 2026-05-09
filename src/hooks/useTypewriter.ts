"use client";

import { useEffect, useState } from "react";

interface UseTypewriterOptions {
  words: string[];
  typeDelay?: number;
  holdDelay?: number;
  eraseDelay?: number;
}

export function useTypewriter({
  words,
  typeDelay = 72,
  holdDelay = 1300,
  eraseDelay = 34,
}: UseTypewriterOptions) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const atFullWord = text === currentWord;
    const atEmptyWord = text === "";
    const delay = atFullWord && !deleting ? holdDelay : deleting ? eraseDelay : typeDelay;

    const timeout = window.setTimeout(() => {
      if (!deleting && atFullWord) {
        setDeleting(true);
        return;
      }

      if (deleting && atEmptyWord) {
        setDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
        return;
      }

      const nextLength = deleting ? text.length - 1 : text.length + 1;
      setText(currentWord.slice(0, nextLength));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deleting, eraseDelay, holdDelay, text, typeDelay, wordIndex, words]);

  return text;
}
