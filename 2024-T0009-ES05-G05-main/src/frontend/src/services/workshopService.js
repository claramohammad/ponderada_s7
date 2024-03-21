// workshopService.js
const apiUrl = `${process.env.REACT_APP_API_URL}`;

export async function fetchClassesByWorkshopId(fk_id_oficina) {
  try {
    const response = await fetch(`${apiUrl}/classes/classesFromWorkshop/${fk_id_oficina}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar classes da oficina');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar classes da oficina:', error);
    throw error;
  }
}
