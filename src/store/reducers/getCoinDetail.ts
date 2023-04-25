import React from 'react'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { COIN_API_URL } from '../../utils/apiUrl'

export const getCoinDetail = createAsyncThunk(
    'coinApp/DetailCoin',
    async () => {
        const items = await axios.get(`${COIN_API_URL}`)

        return items.data;
    }
    
)// 이러면 HomePageCoins랑 다를게 없는디.