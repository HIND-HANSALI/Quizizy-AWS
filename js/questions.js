// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
    answer: "Amazon EC2 instances can be launched on demand when needed",
    justification:" C –The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load.",
    options: [
      "Amazon EC2 costs are billed on a monthly basis",
      "Users retain full administrative access to their Amazon EC2 instances.",
      "Amazon EC2 instances can be launched on demand when needed",
      "Users can permanently run enough instances to handle peak workloads."
    ]

  },
    {
    numb: 2,
    question: "Which AWS service would simplify the migration of a database to AWS?",
    answer: "AWS Database Migration Service (AWS DMS)",
    justification:" B – AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.",
    options: [
      "AWS Storage Gateway",
      "AWS Database Migration Service (AWS DMS)",
      "Amazon EC2",
      "Amazon AppStream 2.0"
    ]
  },
    {
    numb: 3,
    question: "Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?",
    answer: "AWS Marketplace",
    justification:"D – AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS.",    
    options: [
      "AWS Config",
      "AWS OpsWorks",
      "AWS SDK",
      "AWS Marketplace"
    ]
  },
    {
    numb: 4,
    question: "Which AWS networking service enables a company to create a virtual network within AWS?",
    answer: "Amazon Virtual Private Cloud (Amazon VPC)",
    justification:"",
    options: [
      "AWS Config",
      "Amazon Route 53",
      "AWS Direct Connect",
      "Amazon Virtual Private Cloud (Amazon VPC)"
    ]
  },
    {
    numb: 5,
    question: "Which of the following is an AWS responsibility under the AWS shared responsibility model?",
    answer: "Maintaining physical hardware",
    justification:"",
    options: [
      "Configuring third-party applications",
      "Maintaining physical hardware",
      "Securing application access and data",
      "Managing guest operating systems"
    ]
  },
  {
    numb: 6,
    question: "Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
    answer: "Edge locations",
    justification:"",
    options: [
      "AWS Regions",
      "Edge locations",
      "Availability Zones",
      "Virtual Private Cloud (VPC)"
    ]
  },
  {
    numb: 7,
    question: "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
    answer: "Enable multi-factor authentication",
    justification:"",
    options: [
      "Use Amazon Cloud Directory",
      "Audit AWS Identity and Access Management (IAM) roles",
      "Enable multi-factor authentication",
      "Enable AWS CloudTrail"
    ]
  },
  {
    numb: 8,
    question: "Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?",
    answer: "AWS CloudTrail",
    justification:"",
    options: [
      "AWS Trusted Advisor",
      "AWS CloudTrail",
      "AWS X-Ray",
      "AWS Identity and Access Management (AWS IAM)"
    ]
  },
  {
    numb: 9,
    question: "Which service would be used to send alerts based on Amazon CloudWatch alarms?",
    answer: "Amazon Simple Notification Service (Amazon SNS)",
    justification:"",
    options: [
      "Amazon Simple Notification Service (Amazon SNS)",
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "Amazon Route 53"
    ]
  },
  {
    numb: 10,
    question: "Where can a user find information about prohibited actions on the AWS infrastructure?",
    answer: "AWS Acceptable Use Policy",
    justification:"",
    options: [
      "AWS Trusted Advisor",
      "Maintaining physical hardware",
      "AWS Billing Console",
      "AWS Acceptable Use Policy"
    ]
  },

 
];