import React from "react";
import { v1 as uuidv1 } from "uuid";
import "./App.css";

class App extends React.Component {
  state = {
    students: [],
    popup: false,
    name: "",
    rating: "",
    isSortedBy: null
  };

  togglePopUp = () => {
    this.setState(state => ({
      popup: !state.popup
    }));
  };

  addStudent = () => {
    this.setState(state => ({
      students: [
        ...state.students,
        {
          id: uuidv1(),
          name: state.name,
          rating: +state.rating
        }
      ],
      name: "",
      rating: ""
    }));

    this.togglePopUp();
  };

  sortBy = field => {
    if (field === this.state.isSortedBy) {
      this.setState(state => ({ students: [...state.students].reverse() }));
    } else {
      switch (field) {
        case "name":
          this.setState(state => ({
            students: [...state.students].sort((a, b) =>
              a.name.localeCompare(b.name)
            )
          }));
          break;
        case "rating":
          this.setState(state => ({
            students: [...state.students].sort((a, b) => a.rating - b.rating)
          }));
          break;
        default:
          this.setState(state => ({
            students: [...state.students].sort((a, b) => a.id - b.id)
          }));
      }
      this.setState({ isSortedBy: field });
    }
  };

  render() {
    const { students, popup, name, rating } = this.state;

    return (
      <div className="App">
        <h1>TATL Technology test task</h1>
        <button type="button" className="btn" onClick={this.togglePopUp}>
          Добавить запись
        </button>
        <hr />

        {popup && (
          <div className="popup">
            <div className="popup_inner">
              <button
                type="button"
                className="btn red darken-4"
                onClick={this.togglePopUp}
              >
                Закрыть
              </button>
              <h4>Добавить запись</h4>
              <div>
                <label>
                  Введите фамилию и имя:&nbsp;
                  <input
                    type="text"
                    value={name}
                    onChange={event =>
                      this.setState({ name: event.target.value })
                    }
                    placeholder="Фамилия, Имя"
                  />
                </label>
              </div>
              <div>
                <label>
                  Введите рейтинг от 0 до 100:&nbsp;
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={rating}
                    onChange={event =>
                      this.setState({ rating: event.target.value })
                    }
                    placeholder="Рейтинг (0-100)"
                  />
                </label>
                {name.trim() && rating && rating >= 0 && rating <= 100 && (
                  <button
                    type="button"
                    className="btn"
                    onClick={this.addStudent}
                  >
                    Добавить рейтинг
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {!!students.length && (
          <table className="centered striped">
            <thead>
              <tr>
                <th>№ п/п</th>
                <th>
                  <span className="sort" onClick={() => this.sortBy("name")}>
                    Фамилия, Имя
                  </span>
                </th>
                <th>
                  <span className="sort" onClick={() => this.sortBy("rating")}>
                    {" "}
                    Рейтинг
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {!students.length && <h4>Пока записей нет</h4>}
      </div>
    );
  }
}

export default App;
