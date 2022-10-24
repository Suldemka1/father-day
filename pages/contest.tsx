import React, {ChangeEvent, useState} from 'react';
import Pagename from "../components/pagename";
import axios from "axios";
import FormData from "form-data";

const input = "border rounded-md py-2 px-3"


const Contest = () => {

	//states
	const [surname, setSurname] = useState<string>('')
	const [name, setName] = useState<string>(' ')
	const [phone, setPhone] = useState<string>(' ')
	const [email, setEmail] = useState<string>('')
	const [fatherFIO, setFatherFIO] = useState<string>('')
	const [locality, setLocality] = useState<string>('')
	const [age, setAge] = useState<string>('')
	const [stage, setStage] = useState<string>('')
	const [childrenCount, setChildrenCount] = useState<string>('')
	const [type, setType] = useState<string>('Рассказ')
	const [story, setStory] = useState<string>('')
	const [photos, setPhotos] = useState([])
	const [video, setVideo] = useState<File>()
	const [video_link, setVideo_link] = useState<string>('')

	const UploadToServer = async () => {

		const formData = new FormData()
		formData.append('surname', surname)
		formData.append('name', name)
		formData.append('phone', phone)
		formData.append('email', email)
		formData.append('father_FIO', fatherFIO)
		formData.append('locality', locality)
		formData.append('age:', age)
		formData.append('stage', stage)
		formData.append('child_count', childrenCount)
		formData.append('type', 'story')
		formData.append('story', story)

		//adding images to form-data
		for (let i = 0; i < photos.length; i++) {
			try {
				formData.append('images', photos[i])
			} catch (e) {
				console.error(e)
			}
		}

		formData.append('video', video)
		formData.append('video_link', video_link)

		//configuration
		const config = {
			headers: {
				'content-type': 'multipart/form-data',
			},
		};

		try {
			await axios.post(
				'http://localhost:3000/api/participant',
				formData,
				config)
				.then(r => console.log(r))
		} catch (e) {
			console.error(e)
		}
	}

	return (
		<div className={"bg-gray"}>
			<div className={'container mx-auto flex flex-col items-center justify-center py-10'}>

				<Pagename title={"Форма для отправки работ на конкурс «Реальный папа»"}/>

				<form className="flex flex-col gap-10 w-4/12">
					<input type={"text"} maxLength={30} placeholder="Фамилия"
						   onChange={e => setSurname(e.target.value)} className={input}/>
					<input type={"text"} maxLength={20} placeholder={"Имя"}
						   onChange={e => setName(e.target.value)} className={input}/>
					<input type={"text"} maxLength={12} placeholder={"Телефон"}
						   onChange={e => setPhone(e.target.value)} className={input}/>
					<input type={"email"} maxLength={30} placeholder="Адрес электронной почты"
						   onChange={e => setEmail(e.target.value)} className={input}/>
					<input type={"text"} maxLength={60} placeholder={"ФИО Реального Папы"}
						   onChange={e => setFatherFIO(e.target.value)} className={input}/>
					<input type={"text"} maxLength={60} placeholder={"Город, населенный пункт"}
						   onChange={e => setLocality(e.target.value)} className={input}/>
					<input type={"text"} maxLength={3} placeholder="Возраст"
						   onChange={e => setAge(e.target.value)} className={input}/>
					<input type={"text"} maxLength={3} placeholder={"Стаж семейной жизни"}
						   onChange={e => setStage(e.target.value)} className={input}/>
					<input type={"text"} maxLength={2} placeholder={"Количество детей"}
						   onChange={e => setChildrenCount(e.target.value)} className={input}/>

					<div className="flex flex-col gap-5">
						<select onChange={e => setType(e.target.value)} className={input}>
							<option selected={true}>Рассказ</option>
							<option>Видео-история</option>
						</select>

						{type === 'Рассказ' &&

                            <textarea rows={4} placeholder={'Рассказ о Реальном Папе'}
                                      onChange={e => setStory(e.target.value)}
                                      className={"border rounded-md px-3 py-2"}/>}

					</div>

					<div>
						<label htmlFor={'images'}>
							Загрузите ваши фотографии (не более 10)
						</label>
						<input id={'images'} style={{display: "none"}} type={"file"} className={"bg-my-red"}
							   multiple
							   onChange={(event: ChangeEvent<HTMLInputElement>) => {
								   // @ts-ignore
								   return setPhotos(event.target.files)
							   }}/>
					</div>

					{
						type === 'Видео-история' &&

                        <div>
                            <label htmlFor={'video'}>
                                Загрузите ваше видео
                                <input id={'video'} style={{display: "none"}} type={"file"} accept={'video/*'}
                                       onChange={(event: ChangeEvent<HTMLInputElement>) => {
										   // @ts-ignore
										   return setVideo(event.target.files[0]);
									   }}/>
                            </label>

                        </div>
					}

					{type === 'Видео-история' &&
                        <input type={"text"} placeholder={"Ссылка на видео"} className={input}/>}

					<button type={"button"} className={"bg-my-red text-white px-5 py-3"} onClick={UploadToServer}>
						Отправить
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