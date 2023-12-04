import React from "react";
import { Car } from "../lib/types";
import { FaCar } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { supabaseServerClient } from "../lib/initSupabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"

type CarsListProps = {
  cars: Car[];
};

export default async function CarsList({ cars }: CarsListProps) {

  const addCarToGarage = async (data: FormData) => {
    "use server";
    // Gets the info of the currently logged in User - used for posting to car to users garage
    const {
      data: { user },
    } = await supabaseServerClient.auth.getUser();

    const idOfCarToAddToGarage = data.get("carId");
    const idOfUserAddingToGarage = user?.id;

    const newGarageEntry = {
      car:idOfCarToAddToGarage,
      owner:idOfUserAddingToGarage
    }

    await supabaseServerClient.from("garage").insert([newGarageEntry]);
    revalidatePath("/cars/garage");
    redirect("/cars/garage")
  };

  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      {cars.map((car) => (
        <div
          key={car.id}
          className="mb-4 w-full max-w-xl bg-white rounded-lg shadow-md p-6 space-y-2"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FaCar className="text-indigo-600 h-6 w-6" />
              <h3 className="text-lg text-gray-900 font-semibold">
                {car.make} {car.model}
              </h3>
            </div>

            {/* action for adding a car to a users garage. Calls the addCarToGarage when the garage icon is clicked */}
            <form action={addCarToGarage}>
              <input readOnly className="hidden" value={car.id} name="carId" />
              <button
                type="submit"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                title="Add to Garage"
              >
                <GiHomeGarage className="h-6 w-6" />
                <span>Add to Garage</span>
              </button>
            </form>
            {/* */}
          </div>
          <p className="text-gray-600">Year: {car.year}</p>
        </div>
      ))}
    </div>
  );
}
