import z from "zod";

const movieSchema = z.object({
  title: z
    .string({ invalid_type_error: "Title should be a string!" })
    .min(1, { message: "Title should not be empty!" })
    .max(255, { message: "Title is too long! Keep it under 255 characters." }),
  year: z
    .number({ invalid_type_error: "Year should be a number!" })
    .int()
    .min(1888, { message: "Please enter a valid year after 1888." })
    .max(2024, { message: "Year should not exceed 2024." }),
  director: z
    .string()
    .min(1, { message: "Director's name should not be empty!" })
    .max(255, {
      message: "Director's name is too long! Keep it under 255 characters.",
    }),
  duration: z
    .number({ invalid_type_error: "Duration should be a number!" })
    .int()
    .min(1, { message: "Duration should be at least 1 minute." })
    .max(500, { message: "Duration should not exceed 500 minutes." }),
  genre: z
    .string({ invalid_type_error: "Genre should be a string!" })
    .min(1, { message: "Genre should not be empty!" })
    .max(20, { message: "Genre is too long! Keep it under 20 characters." }),
  poster: z
    .string({ invalid_type_error: "Poster should be a string!" })
    .url({ message: "Invalid URL format for the poster image." }),
  rate: z
    .number({ invalid_type_error: "Rate should be a number!" })
    .min(0, { message: "Rate should not be negative." })
    .max(10, { message: "Rate should not exceed 10." }),
  synopsis: z
    .string({ invalid_type_error: "Synopsis should be a string!" })
    .min(1, { message: "Synopsis should not be empty!" })
    .max(1000, {
      message: "Synopsis is too long! Keep it under 1000 characters.",
    }),
});

export default movieSchema;
