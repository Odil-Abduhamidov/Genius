import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup"; // Библиотека для валидации
import { Controller, SubmitHandler, useForm } from "react-hook-form"; // Хуки для работы с формами
import { yupResolver } from "@hookform/resolvers/yup"; // Подключаем интеграцию с yup
import { Input } from "../../components/Input/Input"; // Компонент для полей ввода
import "./RegistrationPage.scss";

// Интерфейс для данных регистрации
interface IRegistrationPage {
  userphone: string;
  useremail: string;
  city: string;
  firstname: string;
  lastname: string;
  userpassword: string;
}

// Создаем схему валидации для формы с использованием библиотеки yup
const registrationFormSchema = yup.object({
  userphone: yup
    .string()
    .required("Обязательное поле")
    .matches(/^[+]?[0-9]{10,15}$/, "Неверный номер телефона"),
  useremail: yup
    .string()
    .required("Обязательное поле")
    .email("Введите почту в правильном формате"),
  city: yup.string().required("Обязательное поле"),
  firstname: yup.string().required("Обязательное поле"),
  lastname: yup.string().required("Обязательное поле"),
  userpassword: yup
    .string()
    .required("Обязательное поле")
    .min(8, "Минимум 8 символов"),
});

// Компонент страницы регистрации
export const RegistrationPage = () => {
  const navigate = useNavigate(); // Хук для навигации на другие страницы

  // Используем хук для работы с формой и валидацией
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationPage>({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      userphone: "",
      useremail: "",
      city: "",
      firstname: "",
      lastname: "",
      userpassword: "",
    },
  });

  // Функция, которая вызывается при отправке формы
  const onSubmit: SubmitHandler<IRegistrationPage> = (data) => {
    // В данном примере просто выводим данные
    console.log("Данные пользователя:", data);
    navigate("/main"); // Переходим на страницу после успешной регистрации
  };

  return (
    <div className="RegistrationPage">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Телефон */}
        <Controller
          name="userphone"
          control={control}
          render={({ field }) => (
            <Input
              isError={!!errors.userphone}
              errorMessage={errors.userphone?.message}
              type="text"
              placeholder="Телефон"
              {...field}
            />
          )}
        />

        {/* Эл.почта */}
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

        {/* Город */}
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Input
              isError={!!errors.city}
              errorMessage={errors.city?.message}
              type="text"
              placeholder="Город"
              {...field}
            />
          )}
        />

        {/* Имя */}
        <Controller
          name="firstname"
          control={control}
          render={({ field }) => (
            <Input
              isError={!!errors.firstname}
              errorMessage={errors.firstname?.message}
              type="text"
              placeholder="Имя"
              {...field}
            />
          )}
        />

        {/* Фамилия */}
        <Controller
          name="lastname"
          control={control}
          render={({ field }) => (
            <Input
              isError={!!errors.lastname}
              errorMessage={errors.lastname?.message}
              type="text"
              placeholder="Фамилия"
              {...field}
            />
          )}
        />

        {/* Пароль */}
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
        <Link to="/login">Есть Аккаунт?</Link>

        {/* Кнопка для отправки формы */}
        <button type="submit" className="submit-button">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};
