import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom"; // Хук для навигации между страницами
import * as yup from "yup"; // Библиотека для валидации форм
import { Controller, SubmitHandler, useForm } from "react-hook-form"; // Хук для работы с формами
import { yupResolver } from "@hookform/resolvers/yup"; // Подключаем интеграцию с yup для валидации
import { Input } from "../../components/Input/Input";

// Определяем интерфейс для данных, которые будут отправляться через форму
interface ILoginPage {
  useremail: string;
  userpassword: string;
}

// Создаем схему валидации для формы с использованием библиотеки yup
const loginFormSchema = yup.object({
  useremail: yup
    .string()
    .required("Обязательное поле") // Почта обязательна для заполнения
    .email("Введите почту в правильном формате"), // Проверяем правильность почты
  userpassword: yup
    .string()
    .required("Обязательное поле") // Пароль обязателен
    .min(8, "Минимум 8 символов"), // Пароль должен быть не менее 8 символов
});

// Основной компонент страницы входа
export const LoginPage = () => {
  // Используем хук для работы с формой и валидацией
  const {
    control, // Контроллер для управления состоянием полей формы
    handleSubmit, // Функция для отправки данных формы
    formState: { errors }, // Ошибки формы
  } = useForm<ILoginPage>({
    resolver: yupResolver(loginFormSchema), // Связываем yup с react-hook-form для валидации
    defaultValues: { useremail: "", userpassword: "" }, // Начальные значения для формы
  });

  const navigate = useNavigate(); // Хук для навигации на другие страницы

  // Функция, которая вызывается при отправке формы
  const onSubmit: SubmitHandler<ILoginPage> = (data) => {
    try {
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        const user = JSON.parse(storedUser); // Преобразуем строку в объект

        if (
          user.useremail === data.useremail &&
          user.userpassword === data.userpassword
        ) {
          console.log("Авторизация успешна"); // Успешная авторизация
          navigate("/main"); // Переходим на страницу main после успешного входа
        } else {
          console.log("Неверный email или пароль"); // Ошибка, если данные не совпадают
          // Здесь можно добавить логику для отображения сообщения об ошибке
        }
      } else {
        console.log("Пользователь не найден"); // Если пользователя нет в localStorage
      }
    } catch (error) {
      console.error("Ошибка при обработке данных в localStorage", error);
    }
    navigate("\main")
  };

  return (
    <div className="LoginPage">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Поле для ввода почты */}
        <Controller
          name="useremail"
          control={control}
          render={({ field }) => (
            <Input
              isError={!!errors.useremail}
              errorMessage={errors.useremail?.message}
              type="text"
              placeholder="Эл.почта"
              {...field}
            />
          )}
        />
        {/* Поле для ввода пароля */}
        <Controller
          name="userpassword"
          control={control}
          render={({ field }) => (
            <Input
              isError={!!errors.userpassword}
              errorMessage={errors.userpassword?.message}
              type="password"
              placeholder="Пароль"
              {...field}
            />
          )}
        />
        <button type="submit">Войти</button>
        <Link to="/reg">Нет Аккаунта?</Link>
      </form>
      {/* Компонент для альтернативных методов авторизации (например, через соцсети) */}
    </div>
  );
};
