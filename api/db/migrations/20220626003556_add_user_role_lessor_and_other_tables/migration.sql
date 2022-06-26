/*
  Warnings:

  - You are about to drop the `LodgingConstraints` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LodgingConstraints" DROP CONSTRAINT "LodgingConstraints_lodgingId_fkey";

-- DropTable
DROP TABLE "LodgingConstraints";

-- CreateTable
CREATE TABLE "LodgingConstraint" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lodgingId" INTEGER,

    CONSTRAINT "LodgingConstraint_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LodgingConstraint" ADD CONSTRAINT "LodgingConstraint_lodgingId_fkey" FOREIGN KEY ("lodgingId") REFERENCES "Lodging"("id") ON DELETE SET NULL ON UPDATE CASCADE;
