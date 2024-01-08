import supabase from "./supabase";

export async function getPeople() {
  const { data, error } = await supabase.from("people").select("*");

  if (error) {
    console.error(error);
    throw new Error("People could not be loaded");
  }

  return data;
}
