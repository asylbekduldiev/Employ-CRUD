import React, { useEffect, useState } from 'react';
import { getAllItems, getItemById, createItem, updateItem, deleteItem } from './apiclients';
import { Item } from './interfaces';
import '../Workouts/Workouts.css';

const Workouts: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    useEffect(() => {
        const fetchItems = async () => {
            const data = await getAllItems();
            setItems(data.items);
        };

        fetchItems();
    }, []);

    const handleGetItem = async (id: string) => {
        const item = await getItemById(id);
        setSelectedItem(item);
    };

    const handleCreateItem = async (newItem: Item) => {
        const createdItem = await createItem(newItem);
        setItems([...items, createdItem]);
    };

    const handleUpdateItem = async (id: string, updatedItem: Item) => {
        const item = await updateItem(id, updatedItem);
        setItems(items.map(i => i.id === id ? item : i));
    };

    const handleDeleteItem = async (id: string) => {
        await deleteItem(id);
        setItems(items.filter(i => i.id !== id));
    };

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Workouts;
