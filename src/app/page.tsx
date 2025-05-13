"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ProductCarousel } from "@/components/Carousel";
import { ShowExtra } from "@/components/showExtra";
import { Collection } from "@/components/Collection";
import { Catalogs } from "@/components/Catalogs";
export default function Home() {
  const [activeGender, setActiveGender] = useState<boolean>(true);
  const favoiteProdcuts = [
    {
      title: "Одежда",
      img: "/wear.png"
    },
    {
      title: "Обувь",
      img: "/wear.png"
    },
    {
      title: "Часы",
      img: "/wear.png"
    },
    {
      title: "Аксессуары",
      img: "/wear.png"
    },
    {
      title: "Сумки",
      img: "/wear.png"
    }
  ]
  const shoes = [
    {
      title: `Кроссовки и кеды`,
      img: "/wear.png"
    },
    {
      title: "Ботинки и сапоги",
      img: "/wear.png"
    },
    {
      title: "Классическая обувь",
      img: "/wear.png"
    },
    {
      title: "Лоферы",
      img: "/wear.png"
    },
    {
      title: "Мокасины",
      img: "/wear.png"
    },
    {
      title: "Угги",
      img: "/wear.png"
    },
    {
      title: "Открытая обувь",
      img: "/wear.png"
    }
  ]
  const clothes = [
    {
      title: `Пуховики`,
      img: "/wear.png"
    },
    {
      title: "Пальто",
      img: "/wear.png"
    },
    {
      title: "Куртки и парки",
      img: "/wear.png"
    },
    {
      title: "Ветровки и жилетки",
      img: "/wear.png"
    },
    {
      title: "Костюмы и блейзеры",
      img: "/wear.png"
    },
    {
      title: "Деним",
      img: "/wear.png"
    },
    {
      title: "Брюки и шорты",
      img: "/wear.png"
    },
    {
      title: "Трикотаж и свитшоты",
      img: "/wear.png"
    }, {
      title: "Рубашки и джинсовки",
      img: "/wear.png"
    }, {
      title: "Футболки и поло",
      img: "/wear.png"
    }, {
      title: "Нижнее бельё и одежда для дома",
      img: "/wear.png"
    },
  ]
  const accesories = [
    {
      title: `Сумки-мессенджеры`,
      img: "/wear.png"
    },
    {
      title: "Сумки на плечо",
      img: "/wear.png"
    },
    {
      title: "Поясные сумки",
      img: "/wear.png"
    },
    {
      title: "Клатчи",
      img: "/wear.png"
    },
    {
      title: "Дорожные сумки",
      img: "/wear.png"
    },
    {
      title: "Рюкзаки",
      img: "/wear.png"
    },
    {
      title: "Портфели",
      img: "/wear.png"
    },
    {
      title: "Кошельки",
      img: "/wear.png"
    },
  ]
  const products = [
    {
      id: 1,
      name: "Nike Air Max 270",
      price: 159.99,
      category: "sneakers",
      gender: ["men", "women"],
      image: "https://i.pinimg.com/originals/9a/06/a9/9a06a9d5fb3daddd463ae7f84b82904f.png",
      colors: ["black", "white"],
      sizes: [38, 39, 40, 41, 42, 43],
      rating: 4.5,
      reviews: 24,
    },
    {
      id: 2,
      name: "Adidas Superstar",
      price: 129.99,
      category: "sneakers",
      gender: ["men", "women"],
      image: "https://i.pinimg.com/originals/9a/06/a9/9a06a9d5fb3daddd463ae7f84b82904f.png",
      colors: ["white", "black"],
      sizes: [36, 37, 38, 39, 40],
      rating: 4.2,
      reviews: 18,
      isNew: false
    },
    {
      id: 3,
      name: "Timberland Premium Boots",
      price: 229.99,
      category: "boots",
      gender: ["men"],
      image: "https://i.pinimg.com/originals/9a/06/a9/9a06a9d5fb3daddd463ae7f84b82904f.png",
      colors: ["brown", "black"],
      sizes: [40, 41, 42, 43, 44],
      rating: 4.8,
      reviews: 32,
      isNew: true
    },
    {
      id: "4",
      name: "Puma RS-X",
      price: 119.99,
      category: "sneakers",
      gender: ["men", "women"],
      image: "https://i.pinimg.com/originals/9a/06/a9/9a06a9d5fb3daddd463ae7f84b82904f.png",
      colors: ["blue", "red", "white"],
      sizes: [37, 38, 39, 40, 41, 42],
      rating: 4.3,
      reviews: 15,
      isNew: true
    },
    {
      id: "5",
      name: "Converse Chuck Taylor",
      price: 89.99,
      category: "sneakers",
      gender: ["men", "women", "kids"],
      image: "https://i.pinimg.com/originals/9a/06/a9/9a06a9d5fb3daddd463ae7f84b82904f.png",
      colors: ["black", "white", "red"],
      sizes: [35, 36, 37, 38, 39, 40],
      rating: 4.7,
      reviews: 42,
      isNew: false
    },
    {
      id: "6",
      name: "Dr. Martens 1460",
      price: 179.99,
      category: "boots",
      gender: ["women"],
      image: "https://i.pinimg.com/originals/9a/06/a9/9a06a9d5fb3daddd463ae7f84b82904f.png",
      colors: ["black", "cherry"],
      sizes: [36, 37, 38, 39, 40],
      rating: 4.6,
      reviews: 28,
      isNew: false
    },
    {
      id: "7",
      name: "Vans Old Skool",
      price: 79.99,
      category: "sneakers",
      gender: ["men", "women"],
      image: "https://i.pinimg.com/originals/9a/06/a9/9a06a9d5fb3daddd463ae7f84b82904f.png",
      colors: ["black", "checkerboard"],
      sizes: [38, 39, 40, 41, 42],
      rating: 4.4,
      reviews: 35,
      isNew: false
    },
    {
      id: "8",
      name: "New Balance 574",
      price: 109.99,
      category: "sneakers",
      gender: ["men", "women"],
      image: "https://i.pinimg.com/originals/9a/06/a9/9a06a9d5fb3daddd463ae7f84b82904f.png",
      colors: ["gray", "navy"],
      sizes: [39, 40, 41, 42, 43],
      rating: 4.5,
      reviews: 21,
      isNew: true
    },
    {
      id: "9",
      name: "UGG Classic Boots",
      price: 199.99,
      category: "boots",
      gender: ["women"],
      image: "https://i.pinimg.com/originals/9a/06/a9/9a06a9d5fb3daddd463ae7f84b82904f.png",
      colors: ["chestnut", "black"],
      sizes: [36, 37, 38, 39],
      rating: 4.9,
      reviews: 47,
      isNew: false
    },
    {
      id: "10",
      name: "Reebok Classic Leather",
      price: 99.99,
      category: "sneakers",
      gender: ["men", "women"],
      image: "https://i.pinimg.com/originals/9a/06/a9/9a06a9d5fb3daddd463ae7f84b82904f.png",
      colors: ["white", "black"],
      sizes: [38, 39, 40, 41, 42],
      rating: 4.2,
      reviews: 19,
      isNew: false
    },
    {
      id: "11",
      name: "Air Jordan 1 Retro",
      price: 189.99,
      category: "sneakers",
      gender: ["men"],
      image: "https://i.pinimg.com/originals/9a/06/a9/9a06a9d5fb3daddd463ae7f84b82904f.png",
      colors: ["red", "black", "white"],
      sizes: [40, 41, 42, 43, 44],
      rating: 4.8,
      reviews: 38,
      isNew: true
    },
    {
      id: "12",
      name: "Skechers Go Walk",
      price: 89.99,
      category: "sneakers",
      gender: ["women"],
      image: "https://i.pinimg.com/originals/9a/06/a9/9a06a9d5fb3daddd463ae7f84b82904f.png",
      colors: ["pink", "gray"],
      sizes: [36, 37, 38, 39],
      rating: 4.1,
      reviews: 14,
      isNew: false
    },
    {
      id: "13",
      name: "Clarks Desert Boots",
      price: 149.99,
      category: "boots",
      gender: ["men"],
      image: "https://i.pinimg.com/originals/9a/06/a9/9a06a9d5fb3daddd463ae7f84b82904f.png",
      colors: ["brown", "tan"],
      sizes: [39, 40, 41, 42, 43],
      rating: 4.7,
      reviews: 26,
      isNew: false
    },
    {
      id: "14",
      name: "Asics Gel-Kayano",
      price: 139.99,
      category: "sneakers",
      gender: ["men", "women"],
      image: "https://i.pinimg.com/originals/9a/06/a9/9a06a9d5fb3daddd463ae7f84b82904f.png",
      colors: ["blue", "silver"],
      sizes: [38, 39, 40, 41, 42, 43],
      rating: 4.6,
      reviews: 31,
      isNew: true
    },
    {
      id: "15",
      name: "Steve Madden Heels",
      price: 119.99,
      oldPrice: 14.43,
      category: "heels",
      gender: ["women"],
      image: "https://i.pinimg.com/originals/9a/06/a9/9a06a9d5fb3daddd463ae7f84b82904f.png",
      colors: ["black", "nude"],
      sizes: [36, 37, 38, 39],
      rating: 4.3,
      reviews: 22,
      isNew: true
    }
  ];
  const brendImages = [
    { img: "/brendImage1.png", alt: "Brand 1" },
    { img: "/brendImage1.png", alt: "Brand 2" },
    { img: "/brendImage1.png", alt: "Brand 3" },
    { img: "/brendImage1.png", alt: "Brand 4" },
    { img: "/brendImage1.png", alt: "Brand 1" },
    { img: "/brendImage1.png", alt: "Brand 2" },
    { img: "/brendImage1.png", alt: "Brand 3" },
    { img: "/brendImage1.png", alt: "Brand 4" },    { img: "/brendImage1.png", alt: "Brand 1" },
    { img: "/brendImage1.png", alt: "Brand 2" },
    { img: "/brendImage1.png", alt: "Brand 3" },
    { img: "/brendImage1.png", alt: "Brand 4" },    { img: "/brendImage1.png", alt: "Brand 1" },
    { img: "/brendImage1.png", alt: "Brand 2" },
    { img: "/brendImage1.png", alt: "Brand 3" },
    { img: "/brendImage1.png", alt: "Brand 4" },    { img: "/brendImage1.png", alt: "Brand 1" },
    { img: "/brendImage1.png", alt: "Brand 2" },
    { img: "/brendImage1.png", alt: "Brand 3" },
    { img: "/brendImage1.png", alt: "Brand 4" },    { img: "/brendImage1.png", alt: "Brand 1" },
    { img: "/brendImage1.png", alt: "Brand 2" },
    { img: "/brendImage1.png", alt: "Brand 3" },
    { img: "/brendImage1.png", alt: "Brand 4" },    { img: "/brendImage1.png", alt: "Brand 1" },
    { img: "/brendImage1.png", alt: "Brand 2" },
    { img: "/brendImage1.png", alt: "Brand 3" },
    { img: "/brendImage1.png", alt: "Brand 4" },    { img: "/brendImage1.png", alt: "Brand 1" },
    { img: "/brendImage1.png", alt: "Brand 2" },
    { img: "/brendImage1.png", alt: "Brand 3" },
    { img: "/brendImage1.png", alt: "Brand 4" },    { img: "/brendImage1.png", alt: "Brand 1" },
    { img: "/brendImage1.png", alt: "Brand 2" },
    { img: "/brendImage1.png", alt: "Brand 3" },
    { img: "/brendImage1.png", alt: "Brand 4" },    { img: "/brendImage1.png", alt: "Brand 1" },
    { img: "/brendImage1.png", alt: "Brand 2" },
    { img: "/brendImage1.png", alt: "Brand 3" },
    { img: "/brendImage1.png", alt: "Brand 4" },    { img: "/brendImage1.png", alt: "Brand 1" },
    { img: "/brendImage1.png", alt: "Brand 2" },
    { img: "/brendImage1.png", alt: "Brand 3" },
    { img: "/brendImage1.png", alt: "Brand 4" },    { img: "/brendImage1.png", alt: "Brand 1" },
    { img: "/brendImage1.png", alt: "Brand 2" },
    { img: "/brendImage1.png", alt: "Brand 3" },
    { img: "/brendImage1.png", alt: "Brand 4" },
  ];

  const styleData = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Яркий весенний лук",
      quantity: 5,
      link: "/looks/1",
      stylist: "Анна Петрова",
      season: "Весна 2024",
      price: 387,
      items: [
        { name: "Желтая куртка", brand: "ZARA" },
        { name: "Белый топ", brand: "Massimo Dutti" },
        { name: "Синие джинсы", brand: "Levi's" }
      ]
    },
    {
      id: 2,
      name: "Офисный шик",
      image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quantity: 4,
      link: "/looks/2",
      stylist: "Иван Сидоров",
      season: "Всесезонный",
      price: 324,
      items: [
        { name: "Серый костюм", brand: "Boggi" },
        { name: "Голубая рубашка", brand: "Hugo Boss" }
      ]
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Романтический вечер",
      quantity: 6,
      oldPrice:43433,
      link: "/looks/3",
      stylist: "Мария Иванова",
      season: "Лето 2024",
      price: 3244,
      items: [
        { name: "Цветное платье", brand: "Mango" },
        { name: "Босоножки", brand: "Rendez-Vous" }
      ]
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Спортивный стиль",
      quantity: 3,
      link: "/looks/4",
      stylist: "Дмитрий Смирнов",
      season: "Всесезонный",
      price: 3234,
      items: [
        { name: "Худи", brand: "Nike" },
        { name: "Леггинсы", brand: "Adidas" }
      ]
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Гламурный вечер",
      quantity: 7,
      link: "/looks/5",
      stylist: "Елена Волкова",
      season: "Осень 2023",
      price: 3234,
      items: [
        { name: "Черное платье", brand: "Gucci" },
        { name: "Туфли", brand: "Jimmy Choo" }
      ]
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Уличный стиль",
      quantity: 4,
      link: "/looks/6",
      stylist: "Алексей Козлов",
      season: "Зима 2023",
      price: 746,
      items: [
        { name: "Кожаная куртка", brand: "All Saints" },
        { name: "Джинсы", brand: "Diesel" }
      ]
    },
    {
      id: 7,
      image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Деловой кэжуал",
      quantity: 5,
      link: "/looks/7",
      stylist: "Ольга Новикова",
      season: "Весна 2024",
      price: 843,
      items: [
        { name: "Блейзер", brand: "Mango" },
        { name: "Футболка", brand: "COS" }
      ]
    },
    {
      id: 8,
      image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Пляжный образ",
      quantity: 4,
      link: "/looks/8",
      stylist: "Сергей Васильев",
      season: "Лето 2024",
      price: 897,
      items: [
        { name: "Рубашка", brand: "Tommy Hilfiger" },
        { name: "Шорты", brand: "Lacoste" }
      ]
    },
    {
      id: 9,
      image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Городской романтик",
      quantity: 6,
      link: "/looks/9",
      stylist: "Алина Семенова",
      season: "Осень 2023",
      price: 334,
      items: [
        { name: "Пальто", brand: "Max Mara" },
        { name: "Свитер", brand: "Uniqlo" }
      ]
    },
    {
      id: 10,
      image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Минимализм",
      quantity: 3,
      link: "/looks/10",
      stylist: "Артем Федоров",
      season: "Всесезонный",
      price: 3234,
      items: [
        { name: "Белая рубашка", brand: "Theory" },
        { name: "Черные брюки", brand: "Arket" }
      ]
    },
    {
      id: 11,
      image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Вечерний лук",
      quantity: 5,
      link: "/looks/11",
      stylist: "Виктория Морозова",
      season: "Зима 2023",
      price: 3234,
      items: [
        { name: "Платье", brand: "Self-Portrait" },
        { name: "Клатч", brand: "By Far" }
      ]
    },
    {
      id: 12,
      image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Скандинавский стиль",
      quantity: 4,
      link: "/looks/12",
      stylist: "Никита Волков",
      season: "Зима 2023",
      price: 334,
      items: [
        { name: "Свитер", brand: "Acne Studios" },
        { name: "Брюки", brand: "COS" }
      ]
    },
    {
      id: 13,
      image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Богемный шик",
      quantity: 7,
      link: "/looks/13",
      stylist: "Полина Ковалева",
      season: "Лето 2024",
      price: 32334,
      items: [
        { name: "Платье", brand: "Reformation" },
        { name: "Сандалии", brand: "Ancient Greek" }
      ]
    },
    {
      id: 14,
      image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Активный отдых",
      quantity: 4,
      link: "/looks/14",
      stylist: "Максим Орлов",
      season: "Всесезонный",
      price: 32,
      items: [
        { name: "Ветровка", brand: "The North Face" },
        { name: "Кроссовки", brand: "Salomon" }
      ]
    },
    {
      id: 15,
      image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Классический костюм",
      quantity: 5,
      link: "/looks/15",
      stylist: "Екатерина Соколова",
      season: "Осень 2023",
      price: 32334,
      items: [
        { name: "Костюм", brand: "Brunello Cucinelli" },
        { name: "Рубашка", brand: "Eton" }
      ]
    }
  ];

  return (
    <>
    
    <div className="px-5">
      <div className="flex flex-col gap-4 mt-12">
        <Button className={`rounded-full text-sm font-bold text-black ${activeGender ? cn('bg-[#EEEDEB]') : 'bg-white '}`} onClick={() => setActiveGender(true)}>
          Для него
        </Button>
        <Button className={`rounded-full text-sm font-bold text-black ${!activeGender ? cn('bg-[#EEEDEB]') : 'bg-white '}`} onClick={() => setActiveGender(false)}>
          Для неё
        </Button>
      </div>
      <div className="bg-[#B4AEAE] flex h-[170px] rounded-[20px] mt-12">
        <div className="w-1/2 p-5">
          <p className="text-sm font-bold text-white">МОДНЫЕ ЛИНЕЙКИ</p>
          <p className="text-[10px] mt-1.5 text-gray-200">БРЕНДОВОЙ ОДЕЖДЫ <br /> 2025 ГОДА</p>
        </div>
        <div className=" h-full ">
          <Image
            width={198}
            height={200}
            src="/imageHero.svg"
            alt="Background"
            priority
            quality={100}
            className="-z-10 rounded-[0_20px_20px_0]"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mt-10">
          <p className="text-[20px] font-bold">Популярный Продукт</p>
          <Link href="/all-products" className="bg-[#EFEDEC] rounded-full px-2 py-1.5 hover:underline">
            Все {">"}
          </Link>
        </div>
        <div className="flex flex-wrap w-full gap-4 mt-2.5">
          {
            favoiteProdcuts.map(({ title, img }, inx) =>
              <div key={inx} className="card flex justify-between bg-[#EEEDEB] h-[112px] grow min-w-1/3 rounded-[20px] p-2.5">
                <p className="text-[14px] font-bold">{title}</p>
                <Image
                  src={img}
                  alt="odejda"
                  width={65}
                  priority
                  height={100}
                  style={{ width: "auto" }}
                />
              </div>
            )
          }



        </div>
        <div className="flex justify-between items-center mt-10">
          <p className="text-[20px] font-bold">Обувь</p>
          <Link href="/all-products" className="bg-[#EFEDEC] rounded-full px-2 py-1.5 hover:underline">
            Все {">"}
          </Link>
        </div>
        <ShowExtra clothes={shoes} />
      </div>
      <ProductCarousel product={products} />
      <div className="flex justify-between items-center mt-10">
        <p className="text-[20px] font-bold">Одежда</p>
        <Link href="/all-products" className="bg-[#EFEDEC] rounded-full px-2 py-1.5 hover:underline">
          Все {">"}
        </Link>
      </div>
      <ShowExtra clothes={clothes} />
      <ProductCarousel product={products} />
      <Collection styleData={styleData} />
      <div className="flex justify-between items-center mt-10">
          <p className="text-[20px] font-bold">Аксессуары</p>
          <Link href="/all-products" className="bg-[#EFEDEC] rounded-full px-2 py-1.5 hover:underline">
            Все {">"}
          </Link>
        </div>
      <ShowExtra clothes={accesories} />
      <ProductCarousel product={products} />
   
    </div>
    <div className="text-center relative bg-gradient-to-b from-[#ccc8c5] to-white pt-10 md:pt-0">
      <h1 className='text-6xl sm:text-8xl md:text-[150px] lg:text-[300px] top-10 absolute w-full text-white font-playfair leading-none'>UNICFLO</h1>
      <div className='flex mx-auto w-11/12 relative z-10 gap-4 lg:gap-0'>
        <Image
          src='/erasebg-transformed.png'
          alt="Assortment"
          priority
          width={100}
          height={100}
          style={{width:"auto"}}
          className='w-1/3 xl:w-full lg:w-auto mx-auto lg:mx-0 object-contain'
        />
        <div className='flex flex-col justify-center lg:items-end w-1/2 md:w-full pb-10 lg:pb-0'>
          <h1 className='text-xl sm:text-4xl md:text-5xl font-medium text-right text-nowrap'>Весь ассортимент</h1>
          <div className='pt-5 flex items-center justify-end gap-2 sm:gap-4'>
            <Button className="bg-transparent border border-black px-6 sm:px-8 md:px-10 text-black text-[10px] sm:text-base font-semibold hover:text-white hover:bg-black transition-colors w-1/3 md:w-1/2">
              Для неё
            </Button>
            <Button className="bg-transparent border border-black px-6 sm:px-8 md:px-10 text-black text-[10px] sm:text-base font-semibold hover:text-white hover:bg-black transition-colors w-1/3 md:w-1/2">
              Для него
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid  grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3 sm:gap-4">
          {brendImages.map((item, index) => (
            <div 
              className="flex justify-center items-center rounded-lg p-2 sm:p-3 md:p-4 border border-[#EEEEEE] hover:border-gray-300 transition-colors"
              key={index}>
              <Image

                width={100}
                height={100}
                className="object-contain w-full h-6 " 
                src={item.img} 
                alt={item.alt || `Brand ${index + 1}`} 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    <Catalogs link="/" linkButtonTitle="Перейти в каталог" product={styleData.slice(0, 10)} title="Кроссовок в каталоге" desc="В Unicflo есть такие культовые модели как: Nike Air Max, Dunk, New Balance 550, Air Jordan, Adidas Samba, Asics Gel Kahana. Разные расцветки от классических до редких коллекционные вариантов." />
    <Catalogs link="/" linkButtonTitle="Смотреть все кроссовки" product={styleData.slice(0, 10)} title="Забрать сегодня" desc="Самовывоз из магазина в Москве или доставка СДЭКом в любой город РФ" />

    </>
  ); 

}