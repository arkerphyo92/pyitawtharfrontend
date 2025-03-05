import Image from "next/image";
import { Category } from "@/app/_types/category";
import Link from "next/link";

const CategoryListItem = ({ category }: { category: Category }) => {
  return (
    <Link href={`category/${category.name}`}>
      <li>
        <div className="flex flex-col relative ">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${category.cat_image}`}
            quality={80}
            width={150}
            height={60}
            alt={category.name}
            title={category.description}
            className="hover:scale-105 w-full h-32 object-cover object-center transition-all mx-auto"
          />
          <h3 className="font-semibold mb-0">{category.name}</h3>
          <p className="p-0 m-0">{category.products_count} Items</p>
        </div>
      </li>
    </Link>
  );
};

export default CategoryListItem;
