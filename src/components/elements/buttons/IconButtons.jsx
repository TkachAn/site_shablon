// src/base/buttons/IconButtons.jsx
"use client";
import React, { forwardRef } from "react";
import styles from "./button.module.css";
import {
  Menu,
  X,
  Trash,
  Pencil,
  Plus,
  UserPlus,
  UserPen,
  LogIn,
  LogOut,
} from "lucide-react";

const BaseIconButton = forwardRef(
  ({ onClick, title, children, className = "", ...props }, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      type="button"
      className={`${styles.iconButton} ${className}`.trim()}
      title={title}
      aria-label={title}
      {...props}
    >
      {children}
    </button>
  ),
);

BaseIconButton.displayName = "BaseIconButton";

export const LoginIconButton = forwardRef(({ size = 24, ...props }, ref) => (
  <BaseIconButton ref={ref} {...props} title={props.title || "Войти"}>
    <LogIn size={size} />
  </BaseIconButton>
));

export const CloseIconButton = forwardRef(({ size = 24, ...props }, ref) => (
  <BaseIconButton ref={ref} {...props} title={props.title || "Закрыть"}>
    <X size={size} />
  </BaseIconButton>
));

export const DeleteIconButton = forwardRef(({ size = 24, ...props }, ref) => (
  <BaseIconButton ref={ref} {...props} title={props.title || "Удалить"}>
    <Trash size={size} />
  </BaseIconButton>
));

export const EditIconButton = forwardRef(({ size = 24, ...props }, ref) => (
  <BaseIconButton ref={ref} {...props} title={props.title || "Редактировать"}>
    <Pencil size={size} />
  </BaseIconButton>
));

export const AddIconButton = forwardRef(({ size = 24, ...props }, ref) => (
  <BaseIconButton ref={ref} {...props} title={props.title || "Добавить"}>
    <Plus size={size} />
  </BaseIconButton>
));

export const UserAddIconButton = forwardRef(({ size = 24, ...props }, ref) => (
  <BaseIconButton
    ref={ref}
    {...props}
    title={props.title || "Добавить пользователя"}
  >
    <UserPlus size={size} />
  </BaseIconButton>
));

export const UserEditIconButton = forwardRef(({ size = 24, ...props }, ref) => (
  <BaseIconButton
    ref={ref}
    {...props}
    title={props.title || "Редактировать пользователя"}
  >
    <UserPen size={size} />
  </BaseIconButton>
));

export const MenuIconButton = forwardRef(({ size = 24, ...props }, ref) => (
  <BaseIconButton ref={ref} {...props} title={props.title || "Меню"}>
    <Menu size={size} />
  </BaseIconButton>
));

const handleSignOut = () => console.log("Выход из системы...");

export const LogOutIconButton = forwardRef(({ size = 24, ...props }, ref) => (
  <BaseIconButton
    ref={ref}
    {...props}
    onClick={props.onClick || handleSignOut}
    title={props.title || "Выход"}
  >
    <LogOut size={size} />
  </BaseIconButton>
));
