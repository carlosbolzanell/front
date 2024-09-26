"use client";
import { setCookie, parseCookies } from "nookies";
import { getUserByToken, loginUser } from "@/api/login";
import { useRouter } from "next/navigation";
import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import { api } from "@/api/api";
import { Usuario } from "@/types/Usuario";

interface AuthContextData {
  isAuthenticated: boolean;
  signIn: (data: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<Usuario>();

  const isAuthenticated = !!user;

  useEffect(() => {
    const func = async () => {
      const { "pizzaria.token": token } = parseCookies();

      if (token) {
        const userFetch = await getUserByToken();
        if (userFetch) {
          setUser(userFetch);
        }
      } else {
        router.push("/entrar");
      }
    };
    func();
  }, []);

  const signIn = async (data: any) => {
    const { token, expiresIn } = await loginUser(data);

    setCookie(undefined, "pizzaria.token", token, {
      maxAge: expiresIn, //1 hora!
    });
    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    router.push("/pizzas");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
