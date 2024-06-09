
export const uploadImage = async (formData) => {
    const response = await fetch('http://localhost:4000/api/img/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include' // Ensure cookies are sent with the request
    });

    if (!response.ok) {
        throw new Error('Failed to upload image');
    }

    return response.json();
};


