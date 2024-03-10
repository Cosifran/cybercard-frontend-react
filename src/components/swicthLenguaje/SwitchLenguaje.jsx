"use client";
import { useLocale } from "next-intl";
import {useRouter} from "next/navigation";
import {ChangeEvent, useTransition} from "react";
export default function SwitchLenguaje() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale()

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      defaultValue={localeActive}
      onChange={onSelectChange}
      disabled={isPending}>
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  );
}
