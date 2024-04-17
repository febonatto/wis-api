-- CreateEnum
CREATE TYPE "transaction_type" AS ENUM ('INCOME', 'EXPENSE');

-- CreateTable
CREATE TABLE "transaction_categories" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "type" "transaction_type" NOT NULL,

    CONSTRAINT "transaction_categories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "transaction_categories" ADD CONSTRAINT "transaction_categories_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
