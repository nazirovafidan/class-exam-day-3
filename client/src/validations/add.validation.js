import * as yup from "yup"

export const addSchema=yup.object().shape({
    imageSrc:yup.string().url().required(),
    title:yup.string().required(),
    price:yup.number().required()
})