class AttendanceList {
  constructor( fk_id_aluno, fk_id_aula, presenca) {
    this.fk_id_aluno = fk_id_aluno;
    this.fk_id_aula = fk_id_aula;
    this.presenca = presenca;
  }
}

module.exports = AttendanceList;
