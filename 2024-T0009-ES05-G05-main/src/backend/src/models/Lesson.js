class Lesson {
    constructor(id_aula, nome, data, dias_semana, fk_id_turma) {
      this.id_aula = id_aula;
      this.nome = nome;
      this.data = data;
      this.dias_semana = dias_semana;
      this.fk_id_turma = fk_id_turma;
    }
  }
  
  module.exports = Lesson;
  