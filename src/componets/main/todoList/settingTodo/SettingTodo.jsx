const SettingTodo = () => {
  return (
    <div>
      <form>
        <div>
          <fieldset>
            <input name="1" type="radio" value="theme1" />
            <input name="1" type="radio" value="theme2" />
            <input name="1" type="radio" value="theme3" />
            <input name="1" type="radio" value="theme4" />
          </fieldset>
        </div>
        <div>
          <fieldset>
            <input name="2" type="radio" value="language1" />
            <input name="2" type="radio" value="language2" />
            <input name="2" type="radio" value="language3" />
            <input name="2" type="radio" value="language4" />
          </fieldset>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SettingTodo;
