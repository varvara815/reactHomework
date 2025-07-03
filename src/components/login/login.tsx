import React from "react";
import UiButton from "../ui/button";
import "./login.css";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "../../store/appSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import Background01 from "../ui/background01";

const Login = () => {
	const [email, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useAppDispatch();

	const handleReset = () => {
		setUsername("");
		setPassword("");
	};

	const handleSubmit = async () => {
		try {
			// Сначала выходим из текущего аккаунта
			await signOut(auth);

			try {
				// Пробуем войти
				const userCredential = await signInWithEmailAndPassword(
					auth,
					email,
					password,
				);
				console.log("User logged in: ", userCredential);
				dispatch(login());

				const from = location.state?.from || "/intro";
				navigate(from, { replace: true });
			} catch (loginError: any) {
				// Если вход не удался по любой причине, пробуем создать аккаунт
				console.log("Login failed, trying to create account:", loginError);

				try {
					const userCredential = await createUserWithEmailAndPassword(
						auth,
						email,
						password,
					);
					console.log("User created: ", userCredential);
					dispatch(login());

					const from = location.state?.from || "/intro";
					navigate(from, { replace: true });
				} catch (createError: any) {
					// Если и создание не удалось, показываем ошибку
					console.log("Create account failed:", createError);

					if (createError.code === "auth/email-already-in-use") {
						alert(
							"This email is already in use but the password is incorrect. Please try again with the correct password.",
						);
					} else {
						alert("Error: " + createError.message);
					}
				}
			}
		} catch (error: any) {
			console.log("General error:", error);
			alert("Error: " + error.message);
		}
	};

	return (
		<>
			<Background01 />
			<div className="login-title-container">
				<h2 className="login-title">Log in</h2>
			</div>

			<form
				className="login"
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
			>
				<div className="username-container">
					<label className="label-username" htmlFor="username">
						User name
					</label>
					<input
						className="input-username"
						type="email"
						value={email}
						onChange={(e) => setUsername(e.target.value)}
						id="username"
						placeholder="Enter email"
						required
						pattern=".+@.+\..+"
						title="Please, enter a valid email"
						autoComplete="username"
					/>
				</div>
				<div className="password-container">
					<label className="label-password" htmlFor="password">
						Password
					</label>
					<input
						className="input-password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						id="password"
						placeholder="Enter password"
						required
						autoComplete="current-password"
						minLength={8}
						pattern="^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
						title="The password must contain at least 8 characters, including english letters and numbers."
					/>
				</div>
				<div className="login-buttons-container">
					<UiButton text="Submit" type="submit" size="submit" />
					<UiButton
						text="Cancel"
						type="inactive"
						size="cancel"
						onClick={handleReset}
					/>
				</div>
			</form>
		</>
	);
};

export default Login;
