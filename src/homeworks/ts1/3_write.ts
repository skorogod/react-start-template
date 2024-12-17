/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

import { TypeScriptConfigOverwrite } from "fork-ts-checker-webpack-plugin/lib/typescript/type-script-config-overwrite"
import {uid} from 'uid'

type TCategory = {
    id: string,
    name: string,
    photo?: string
}

type TProduct = {
    id: string,
    name: string,
    photo: string
    desc?: string
    createdAt: string,
    oldPrice?: number,
    price: number,
    category: TCategory
}

type TOperation = TCost | TProfit

type TCost = {
    type: 'Cost'
    id: string,
    name: string,
    desc?: string,
    createdAt: string,
    amount: number,
    category: TCategory
}

type TProfit = {type: 'Profit'} & Omit<TCost, 'type'>

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */

export const createRandomProduct: (createdAt: string) => TProduct = (createdAt) => {
    const description = str_random(20).split('').map((letter, index) => index % 5 === 0 ? ` ${letter}` : letter).join('')

    return {
        id: uid(8),
        name: str_random(6),
        photo: str_random(10),
        desc: description,
        createdAt,
        oldPrice: Math.random() * 100,
        price: Math.random() * 100,
        category: {
            id: uid(8),
            name: str_random(6),
            photo: str_random(10)
        }
    }
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation: (createdAt: string) => TOperation = (createdAt) => {
    const description = str_random(20).split('').map((letter, index) => index % 5 === 0 ? ` ${letter}` : letter).join('')
    return {
        type: Math.random() > 0.5 ? 'Cost' : 'Profit' as const,
        id: uid(8),
        name: str_random(6),
        desc: description,
        createdAt,
        amount: Math.round(Math.random() * 100),
        category: {
            id: uid(8),
            photo: str_random(10),
            name: str_random(6)
        }
    }
};


//  Функция для генерации рандомной строки
function str_random(length: number) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    for (let i = 0; i < length; i++) {
        const randomInd = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomInd);
    }
    return result;
}
