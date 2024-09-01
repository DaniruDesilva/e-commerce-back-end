import Category from "../infrastructure/schemas/Category.js";
import { createCategoryDto } from "./dto/categories.js";

const categories = [
  { id: "ALL", name: "ALl" },
  { id: "1", name: "Headphones" },
  { id: "2", name: "Earbuds" },
  { id: "3", name: "Speakers" },
  { id: "4", name: "Mobile Phones" },
  { id: "5", name: "Smart Watch" },
];

export const getCategories = async(req, res) => {
  const categories = await Category.find();
  return res.status(200).json(categories).send();
};

export const createCategory = async (req, res) => {
  // We need make sure that the data will always in the correct format
  const category = createCategoryDto.safeParse(req.body);

  if (!category.success) {
    return res.status(400).json({ message: "Invalid data" }).send();
  }

  // categories.push({
  //   id: category.data.id,
  //   name: category.data.name,
  //   // id: (categories.length + 1).toString(),
  // });
  await Category.create({name: category.data.name });
  return res.status(201).send();
};

export const getCategoryById = async (req, res) => {
  const id = req.params.id;
  const category = await Category.find(id);
  if (!category) {
    return res.status(404).json({ message: "category not found" }).send();
  }

  return res.status(200).json(category).send();
};
