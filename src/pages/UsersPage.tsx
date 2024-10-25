import React, { useEffect, useState } from 'react';
import RegisteredUsers from '../components/RegisteredUsers';
import { UserInfo } from '../store/userSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ULR } from '../utils';

const Users: React.FC = () => {
    const [users, setUsers] = useState<UserInfo[]>([]);
    const user = useSelector((state: RootState) => state.user);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${ULR}/users`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user.token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Error fetching users');
                }
                setUsers(await response.json());
            } catch (error) {
                console.error(error);
            }
        };

        fetchUsers();
    }, [user.token]);

    return <RegisteredUsers users={users}/>;
};

export default Users;