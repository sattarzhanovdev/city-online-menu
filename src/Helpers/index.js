import React from 'react'
import axios from 'axios'

export const GetFoods = () => {
	const [ base, setBase ] = React.useState(null)
	
	React.useEffect(() => {
		axios.get('/foods.json')
			.then(res => {
				const result = Object.entries(res.data)
					.map(([id, item]) => {
						return {
							id,
							...item
						}
					})
				
				setBase(result)
			})
	}, [])
	
	return {
		base
	}
}

export const GetOrders = () => {
	const [ orders, setOrders ] = React.useState(null)
	
	React.useEffect(() => {
		axios.get('/orders.json')
			.then(res => {
				const result = Object.entries(res.data)
					.map(([id, item]) => {
						return {
							id,
							...item
						}
					})
				
				setOrders(result)
			})
	}, [])
	
	return {
		orders
	}
}

