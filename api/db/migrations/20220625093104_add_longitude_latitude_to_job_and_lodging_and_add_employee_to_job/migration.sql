/*
  Warnings:

  - Added the required column `latitude` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `lodging` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `lodging` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "employer" TEXT,
ADD COLUMN     "latitude" INTEGER NOT NULL,
ADD COLUMN     "longitude" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "lodging" ADD COLUMN     "latitude" INTEGER NOT NULL,
ADD COLUMN     "longitude" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "department" (
    "id" SERIAL NOT NULL,
    "code" INTEGER,
    "city" TEXT,

    CONSTRAINT "department_pkey" PRIMARY KEY ("id")
);
