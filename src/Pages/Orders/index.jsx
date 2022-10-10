import React from 'react'
import cls from './Orders.module.scss'
import {GetOrders} from "../../Helpers";
import { CgSmileNone } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const Orders = () => {
  const { orders } = GetOrders()
  
  const Navigate = useNavigate()
  
  const toCheck = (id) => {
    // orders?.map(({table, foods}) => {
    //   foods.map(item => {
    //     axios.put(`/orders/${id}/foods/result.json`, item.count * item.price)
    //   })
    // })
  
  
    console.log(id.slice(0, 1).join( ))
  }
  return (
    <div className={cls.orders}>
      {
        orders
        ?
          orders?.map(({id, foods}) => (
            foods.filter(item =>
              item.title === item.title
                ?
              (
                <div
                  className={cls.card}
                  key={id}
                >
                  <div className={cls.up}>
                    <img
                      src={item.img}
                      alt={item.title}
                    />
                  </div>
                  <div className={cls.down}>
                    <h3>{item.title}</h3>
                    <p>{item.price} сом.</p>
                  </div>
                </div>
              )
             : ''
            )
          ))
        :
          (
            <div className={cls.none}>
              <h1><CgSmileNone /></h1>
              <h3>Здесь будут ваши заказы</h3>
              <p>Закажите что нибудь.</p>
              <button
                onClick={() => Navigate('/new_order')}
              >
                Заказать
              </button>
            </div>
          )
      }
      {
        orders?.length >= 1 ?
          <div className={cls.check}>
            <button
              onClick={() => {
                toCheck(orders?.map(({id}) => id))
              }}
            >
              Чек
            </button>
          </div>
          :
          ''
      }
    </div>
  )
}

export default Orders