'use client';
import DeleteButton from "@/components/DeleteButton";
import Left from "@/components/icons/Left";
import EditableImage from "@/components/layout/EditableImage";
import MenuItemForm from "@/components/layout/MenuItemForm";
import UserTabs from "@/components/layout/UserTabs";
import {useProfile} from "@/components/useProfile";
import Link from "next/link";
import {redirect, useParams} from "next/navigation";

import toast from "react-hot-toast";
import SectionHeaders from "../../components/layout/SectionHeaders"
import MenuItem from "../../components/menu/MenuItem"
import { useEffect,useState } from "react";

export default function MenuPage() {
    const [categories, setCategories] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
      fetch('/api/categories').then(res => {
        res.json().then(categories => setCategories(categories))
      });
      fetch('/api/menu-items').then(res => {
        res.json().then(menuItems => setMenuItems(menuItems));
      });
    }, []);
    return (
      <section className="mt-8">
        {categories?.length > 0 && categories.map(c => (
          <div key={c._id}>
            <div className="text-center">
              <SectionHeaders mainHeader={c.name} />
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mt-6 mb-12">
              {menuItems.filter(item => item.category === c._id).map(item => (
                <MenuItem key={item._id} {...item} />
              ))}
            </div>
          </div>
        ))}
      </section>
    );
  }