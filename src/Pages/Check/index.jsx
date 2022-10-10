import React from 'react';
import cls from './Check.module.scss'
import {GetOrders} from "../../Helpers";
import axios from "axios";

const Check = () => {
	const { orders } = GetOrders()
	
	return (
		<div className={cls.check_to_center}>
			<div className={cls.check}>
				<div className={cls.up}>
					<img
						src="/img/logo.png"
						alt="logo"
					/>
					<h3>Добро пожаловать!</h3>
				</div>
				<div className={cls.down}>
					<div className={cls.table}>
						<div className={cls.left}>
							<p>Блюдо</p>
						</div>
						<div className={cls.right}>
							<p>Кол-во</p>
							<p>Сумма</p>
						</div>
					</div>
					<ul className={cls.line}></ul>
					<div className={cls.info}>
						{
							orders?.map(({id, table, foods}) => (
								<div
									className={cls.food}
									key={id}
								>
									<div className={cls.left}>
										{foods.map(item => (
											<p>{item.title.length > 20 ? `${item.title.slice(0, 20)}...` : item.title}</p>
										))}
									</div>
									<div className={cls.right}>
										{foods.map(item => (
											<p>{item.count}</p>
										))}
										{foods.map(item => (
											<p>{item.price}</p>
										))}
									</div>
								</div>
							))
						}
					</div>
					<div className={cls.res}>
						<h3>
							Итого: {
							orders?.map(({id, table, foods}) => (
								foods.map(item => (
								<p>{item.count * item.price}</p>
								))))
							}
						</h3>
					</div>
				</div>
			</div>
			<button>
				Оплатить
			</button>
		</div>
	);
};

export default Check;