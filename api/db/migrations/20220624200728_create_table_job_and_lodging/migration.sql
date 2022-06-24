-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "city" TEXT,
    "salary" INTEGER,
    "description" TEXT,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lodging" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "Type" TEXT,
    "area" INTEGER,
    "city" TEXT,
    "price" INTEGER,
    "description" TEXT,

    CONSTRAINT "lodging_pkey" PRIMARY KEY ("id")
);
