const stubsConnections = [
    {
      id: 1,
      title: 'Nexus',
      type: 'SQL',
      // eslint-disable-next-line max-len
      connection_data: 'Server=healthy.cluster-cxkyccvvyk77.us-east-1.rds.amazonaws.com;Database=formedai_hernanttest1;UserId=nhernanttest1;Password=HvNwX2sCa9El',
      system: true,
      created: '2021-05-18 20:35:11.000',
      modified: '2021-05-18 20:35:11.000',
    },
    {
      id: 2,
      title: 'string',
      type: 'SQL',
      connection_data: 'Server=serverNameTest;Database=databaseName;UserId=userIdTest;Password=passwordTest;Port=portTest',
      system: false,
      created: '2021-09-03 09:57:19.465',
      modified: '2021-09-03 09:57:19.465',
    },
];

const stubDataSource = [
    {
      id: 1,
      connection_id: 1,
      title: 'Nexus Data Source Users',
      code: 'users',
      // eslint-disable-next-line max-len
      query: "select * from users where id LIKE '%@lookup%' OR username LIKE '%@lookup%' OR email LIKE '%@lookup%' OR first_name LIKE '%@lookup%' OR last_name LIKE '%@lookup%' OR middle_name LIKE '%@lookup%'",
      system: true,
      created: '2021-05-18 20:35:11.000',
      modified: '2021-05-18 20:35:11.000',
      parameters: [
        {
          id: 1,
          name: 'lookup',
          type: 'varchar(255)',
          default_value: '',
        },
      ],
    },
    {
      id: 2,
      connection_id: 1,
      title: 'Nexus Data Source Groups',
      code: 'groups',
      query: "select * from groups where name LIKE '%@lookup%'",
      system: true,
      created: '2021-05-18 20:35:11.000',
      modified: '2021-05-18 20:35:11.000',
      parameters: [
        {
          id: 2,
          name: 'lookup',
          type: 'varchar(255)',
          default_value: '',
        },
      ],
    },
    {
      id: 3,
      connection_id: 1,
      title: 'Nexus Data Source Forms',
      code: 'groups',
      query: "select * from forms where title LIKE '%@lookup%' OR code LIKE '%@lookup%' OR description LIKE '%@lookup%'",
      system: true,
      created: '2021-05-18 20:35:11.000',
      modified: '2021-05-18 20:35:11.000',
      parameters: [
        {
          id: 3,
          name: 'lookup',
          type: 'varchar(255)',
          default_value: '',
        },
      ],
    },
];

export {
    stubsConnections,
    stubDataSource,
};
