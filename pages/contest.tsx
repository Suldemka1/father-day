import React, {useState} from 'react';
import Pagename from "../components/pagename";

const input = "border rounded-md py-2 px-3"

const Contest = () => {
	const [surname, setSurname] = useState<string>('')
	const [name, setName] = useState<string>('')
	const [phone, setPhone] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [fatherFIO, setFatherFIO] = useState<string>('')
	const [locality, setLocality] = useState<string>('')
	const [age, setAge] = useState<string>('')
	const [stage, setStage] = useState<string>('')
	const [childrenCount, setChildrenCount] = useState<string>('')
	const [story, setStory] = useState<string>('')
	const [photos, setPhotos] = useState<string>('')
	const [video, setVideo] = useState<File>()
	const [videoLink, setVideoLink] = useState<File>()


	return (
		<div className={"bg-gray"}>
			<div className={'container mx-auto flex flex-col items-center justify-center py-10'}>

				<Pagename title={"Форма для отправки работ на конкурс «Реальный папа»"}/>

				<form className="flex flex-col gap-10 w-4/12">
					<input type={"text"} maxLength={30} placeholder="Фамилия" className={input}/>
					<input type={"text"} maxLength={20} placeholder={"Имя"} className={input}/>
					<input type={"text"} maxLength={12} placeholder={"Телефон"} className={input}/>
					<input type={"email"} maxLength={30} placeholder="Адрес электронной почты" className={input}/>

					<input type={"text"} maxLength={60} placeholder={"ФИО Реального Папы"} className={input}/>
					<input type={"text"} maxLength={60} placeholder={"Город, населенный пункт"} className={input}/>
					<input type={"text"} maxLength={3} placeholder="Возраст" className={input}/>
					<input type={"text"} maxLength={3} placeholder={"Стаж семейной жизни"} className={input}/>
					<input type={"text"} maxLength={2} placeholder={"Количество детей"} className={input}/>

					<div className="flex flex-col gap-5">
						<select className={input}>
							<option>Видео-история</option>
							<option>Рассказ</option>
						</select>
						<textarea rows={4} placeholder={'Рассказ о Реальном Папе'}
								  className={"border rounded-md px-3 py-2"}/>
					</div>

					<div>
						<label htmlFor={'video'}>
							Загрузите ваши фотографии (не более 10)
						</label>
						<input id={'images'} type={"file"} className={"bg-my-red"} multiple={true} />
					</div>
					<div>
						<label htmlFor={'video'}>
							Загрузите ваше видео
						</label>
						<input id={'video'} type={"file"} className={"bg-my-red"}/>
					</div>

					<input type={"text"} placeholder={"Ссылка на видео"} className={input}/>

					<button className={"bg-my-red text-white px-5 py-3"}>
						Отправить форму
					</button>
				</form>

				<div className="flex flex-col gap-5 text-xl text-center py-10">
					<p>
						Нажимая на кнопку, вы даете согласие на обработку своих персональных данных.
						Политика конфиденциальности</p>

					<a href={'/'} className="text-my-red">Положение о конкурсе &quot;Реальный папа &quot;</a>

					<div className="flex justify-center"><p>* Отправляя информацию Вы соглашаетесь с</p>&nbsp;<a
						className="text-my-red">Положением о Конкурсе</a></div>
					<p>* Если у вас возникли сложности или вопросы – напишите на электронную почту
						someemail@mail.ru</p>
				</div>
			</div>
		</div>
	);
};

export default Contest;