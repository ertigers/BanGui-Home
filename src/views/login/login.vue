<template>
  <div class="login">
    <div class="box">
      <h2>Login</h2>
      <form action="../views/cat.vue">
        <div class="inputBox">
          <input type="text" name="" required="" />
          <label>Username</label>
        </div>
        <div class="inputBox">
          <input type="password" name="" required="" />
          <label>password</label>
        </div>
        <input type="submit" name="" value="Submit" />
      </form>
    </div>
  </div>
</template>
<style scoped lang="scss">
.login {
  height: 100vh;
  font-family: sans-serif;
  background: url("http://img0.dili360.com/pic/2021/06/16/60c9b8ef381f39a05227557.jpg@!rw9") no-repeat;
  background-size: 100% 100%;
}
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 40px;
  background: rgba(1, 151, 161, -0.2);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.box .inputBox {
  position: relative;
}

.box .inputBox input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.box .inputBox label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  letter-spacing: 1px;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.box .inputBox input:focus ~ label,
.box .inputBox input:valid ~ label {
  top: -18px;
  left: 0;
  color: #03a9f4;
  font-size: 12px;
}

.box input[type="submit"] {
  background: transparent;

  border: none;
  outline: none;
  color: #fff;
  background: #03a9f4;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}
</style>