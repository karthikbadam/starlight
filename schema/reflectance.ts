import { z } from 'zod'

export const ReflectanceElement = z.object({
  source_id: z.string(),
  solution_id: z.string(),
  number_mp: z.preprocess((a) => parseFloat(a as string), z.number()),
  denomination: z.string(),
  nb_samples: z.preprocess((a) => parseFloat(a as string), z.number()),
  num_of_spectra: z.preprocess((a) => parseFloat(a as string), z.number()),
  reflectance_spectrum: z.preprocess(
    (a) => !isNaN(a as any) ? parseFloat(a as string) : null,
    z.number().nullable()
  ),
  reflectance_spectrum_err: z.preprocess(
    (a) =>  !isNaN(a as any) ? parseFloat(a as string) : null,
    z.number().nullable()
  ),
  wavelength: z.preprocess((a) => parseFloat(a as string), z.number()),
  reflectance_spectrum_flag: z.preprocess(
    (a) => parseFloat(a as string),
    z.number()
  ),
})

// extract the inferred type
export type ReflectanceElement = z.infer<typeof ReflectanceElement>
export type Reflectance = Array<ReflectanceElement>
