-- Create ContactSubmissions table in your SQL Server database

CREATE TABLE ContactSubmissions (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    Phone NVARCHAR(20),
    Company NVARCHAR(100),
    ProductInterest NVARCHAR(100),
    Message NVARCHAR(MAX) NOT NULL,
    SubmittedAt DATETIME NOT NULL DEFAULT GETDATE(),
    Status NVARCHAR(20) DEFAULT 'New'
);

-- Create index for faster queries
CREATE INDEX IX_ContactSubmissions_SubmittedAt ON ContactSubmissions(SubmittedAt DESC);
CREATE INDEX IX_ContactSubmissions_Status ON ContactSubmissions(Status);
