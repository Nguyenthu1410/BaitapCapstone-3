import React from "react";
import { useMutationRegister } from "../hooks/useMuatationRegister";
import { useForm, Controller } from 'react-hook-form'
import { Input, Button } from 'antd'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerFormSchema } from "../schema/registerFormSchema";
import { useNavigate } from "react-router";
import { PUBLIC_PATH } from "../../../constant/path";

const RegisterPage = () => {
  const { createUser } = useMutationRegister()

  const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        resolver: zodResolver(registerFormSchema)
    })

  const navigate = useNavigate()

  return (
    <div className="container mx-auto">
      <form className="max-w-125 mx-auto space-y-5"
            onSubmit={handleSubmit(async (data) => {
                createUser.mutate(data, {
                  onSuccess() {
                    navigate(PUBLIC_PATH.SIGN_IN)
                  },
                  onError() {
                    console.log('Đăng ký thất bại')
                  },
                })
            })}>
        <h2 className="text-2xl font-semibold">Đăng ký</h2>

        <div>
          <label htmlFor="">Họ tên</label>
          <Controller
            control={control}
            name="hoTen"
            render={({ field }) => {
              return <Input {...field} />;
            }}
          />
          <p className="text-red-500 text-xs">{errors.hoTen?.message}</p>
        </div>

        <div>
          <label htmlFor="">Email</label>
          <Controller
            control={control}
            name="email"
            render={({ field }) => {
              return <Input {...field} />;
            }}
          />
          <p className="text-red-500 text-xs">{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="">Tài khoản</label>
          <Controller
            control={control}
            name="taiKhoan"
            render={({ field }) => {
              return <Input {...field} />;
            }}
          />
          <p className="text-red-500 text-xs">{errors.taiKhoan?.message}</p>
        </div>

        <div>
          <label htmlFor="">Mật Khẩu</label>
          <Controller
            control={control}
            name="matKhau"
            render={({ field }) => {
              return <Input type="password" {...field} />;
            }}
          />
        </div>

        <div>
          <label htmlFor="">Số điện thoại</label>
          <Controller
            control={control}
            name="soDt"
            render={({ field }) => {
              return <Input {...field} />;
            }}
          />
        </div>

        <div>
          <label htmlFor="">Mã nhóm</label>
          <Controller
            control={control}
            name="maNhom"
            render={({ field }) => {
              return <Input {...field} />;
            }}
          />
        </div>

        <Button
          className="w-full"
          color="blue"
          variant="solid"
          htmlType="submit"
          loading={createUser.isPending || createUser.isLoading}
        >
          Đăng ký
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;
