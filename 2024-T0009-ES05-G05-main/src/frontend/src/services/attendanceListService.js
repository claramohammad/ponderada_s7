const apiUrl = `${process.env.REACT_APP_API_URL}/attendanceList`;

async function postAttendanceListByIds(ids) {
    try {
        const response = await fetch(`${apiUrl}/attendanceListIds/${ids}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred while fetching data from the API:', error);
        throw error;
    }
}

export { postAttendanceListByIds };